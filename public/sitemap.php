<?php
header("Content-Type: application/xml; charset=utf-8");

$domain = 'https://lapalabradeldia.co';

// Calculate NYT / Wordle date in UTC
$today = gmdate('Y-m-d\TH:i:s.000\Z');
$staticDate = '2026-05-15T04:05:00.000Z';

$urls = [
    ['/', $today, '1.00', 'daily'],
    ['/wordle-today/', $today, '0.80', 'daily'],
    ['/wordle-hints-today/', $today, '0.80', 'daily'],
    ['/blogs/', $today, '0.80', 'daily'],
    ['/privacy/', $staticDate, '0.30', 'monthly'],
];

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
