<?php
header("Content-Type: application/xml; charset=utf-8");

$domain = 'https://wordlegame.co.uk';

// Calculate NYT / Wordle date in UTC
$today = gmdate('Y-m-d\TH:i:s.000\Z');
$staticDate = '2026-05-15T04:05:00.000Z';

$urls = [
    ['/', $today, '1.00', 'daily'],
    ['/wordle-today/', $today, '0.80', 'daily'],
    ['/wordle-hints-today/', $today, '0.80', 'daily'],
    ['/uk/', $staticDate, '0.80', 'monthly'],
    ['/es/', $staticDate, '0.80', 'monthly'],
    ['/uk/wordle-today/', $today, '0.80', 'daily'],
    ['/uk/wordle-hints-today/', $today, '0.80', 'daily'],
    ['/es/palabra-del-dia/', $today, '0.80', 'daily'],
    ['/es/pistas-de-hoy/', $today, '0.80', 'daily'],
    ['/blogs/', $today, '0.80', 'daily'],
    ['/privacy/', $staticDate, '0.30', 'monthly'],
    ['/uk/privacy/', $staticDate, '0.30', 'monthly'],
    ['/es/privacidad/', $staticDate, '0.30', 'monthly'],
];

// Fetch from Sanity
$projectId = 'v4hsbbd1';
$dataset = 'production';
$query = urlencode('*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt, publishedAt }');
$url = "https://{$projectId}.api.sanity.io/v2024-01-01/data/query/{$dataset}?query={$query}";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_TIMEOUT, 5);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec($ch);
curl_close($ch);

if ($response) {
    $data = json_decode($response, true);
    if (isset($data['result']) && is_array($data['result'])) {
        foreach ($data['result'] as $post) {
            $dateSource = !empty($post['_updatedAt']) ? $post['_updatedAt'] : (!empty($post['publishedAt']) ? $post['publishedAt'] : $staticDate);
            $pubDate = gmdate('Y-m-d\TH:i:s.000\Z', strtotime($dateSource));
            $urls[] = ["/blogs/{$post['slug']}/", $pubDate, '0.70', 'weekly'];
        }
    }
}

echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

foreach ($urls as $u) {
    echo "  <url>\n";
    echo "    <loc>" . htmlspecialchars($domain . $u[0]) . "</loc>\n";
    echo "    <lastmod>" . htmlspecialchars($u[1]) . "</lastmod>\n";
    echo "    <changefreq>" . htmlspecialchars($u[3]) . "</changefreq>\n";
    echo "    <priority>" . htmlspecialchars($u[2]) . "</priority>\n";
    echo "  </url>\n";
}

echo "</urlset>\n";
?>
