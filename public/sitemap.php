<?php
header("Content-Type: application/xml; charset=utf-8");

$domain = 'https://thewordleunlimited.com';
$today = gmdate('Y-m-d\TH:i:sP');
$staticDate = '2026-05-15T00:00:00+00:00';

$urls = [
    ['/', $today, '1.00'],
    ['/wordle-today/', $today, '1.00'],
    ['/wordle-hints-today/', $today, '1.00'],
    ['/uk/', $staticDate, '1.00'],
    ['/es/', $staticDate, '1.00'],
    ['/uk/wordle-today/', $today, '1.00'],
    ['/uk/wordle-hints-today/', $today, '1.00'],
    ['/es/palabra-del-dia/', $today, '1.00'],
    ['/es/pistas-de-hoy/', $today, '1.00'],
    ['/blogs/', $today, '0.80'],
    ['/privacy/', $staticDate, '0.30'],
    ['/uk/privacy/', $staticDate, '0.30'],
    ['/es/privacidad/', $staticDate, '0.30'],
];

// Fetch from Sanity
$projectId = 'v4hsbbd1';
$dataset = 'production';
$query = urlencode('*[_type == "post" && defined(slug.current)]{ "slug": slug.current, publishedAt }');
$url = "https://{$projectId}.api.sanity.io/v2024-01-01/data/query/{$dataset}?query={$query}";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// Handle CORS and timeout just in case
curl_setopt($ch, CURLOPT_TIMEOUT, 5);
// To avoid SSL verify issues on some shared hosts
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec($ch);
curl_close($ch);

if ($response) {
    $data = json_decode($response, true);
    if (isset($data['result']) && is_array($data['result'])) {
        foreach ($data['result'] as $post) {
            $pubDate = !empty($post['publishedAt']) ? gmdate('Y-m-d\TH:i:sP', strtotime($post['publishedAt'])) : $today;
            $urls[] = ["/blogs/{$post['slug']}/", $pubDate, '0.70'];
        }
    }
}

echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

foreach ($urls as $u) {
    echo "  <url>\n";
    echo "    <loc>" . htmlspecialchars($domain . $u[0]) . "</loc>\n";
    echo "    <lastmod>" . htmlspecialchars($u[1]) . "</lastmod>\n";
    echo "    <priority>" . htmlspecialchars($u[2]) . "</priority>\n";
    echo "  </url>\n";
}

echo "</urlset>\n";
?>
