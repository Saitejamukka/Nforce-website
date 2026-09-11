export const CODE_SNIPPETS = [
  "describe('checkout flow', () => {", "  test('applies coupon', async () => {",
  "await page.goto('/cart');", "expect(response.status).toBe(200);",
  "const suite = new TestSuite();", "assert.equal(actual, expected);",
  "pipeline.stage('build').run();", "if (coverage < 90) fail();",
  "// AI-assisted regression scan", "kubectl apply -f deploy.yaml",
  "const bot = new RPAWorker();", "log.info('QA gate passed');",
  "SELECT * FROM defects WHERE open;", "docker build -t nf1-app .",
  "await expect(locator).toBeVisible();", "terraform plan -out=tfplan",
  "class RegressionRunner:", "  def run(self): pass",
  "git commit -m 'fix: flaky test'", "monitor.alert('latency_high')",
];

export const CODE_COLUMNS = Array.from({ length: 5 }, (_, c) => {
  const lines = Array.from({ length: 22 }, (_, i) => CODE_SNIPPETS[(i + c * 4) % CODE_SNIPPETS.length]);
  return { i: c, dur: 34 + c * 6, lines: [...lines, ...lines] };
});

export const HERO_WORDS = [
  { text: 'AI.', red: true },
  { text: 'Quality', red: false },
  { text: 'Engineering.', red: true },
  { text: 'Digital', red: false },
  { text: 'Transformation.', red: false },
  { text: 'Built', red: false },
  { text: 'to', red: false },
  { text: 'Scale', red: true },
  { text: 'at', red: false },
  { text: 'Speed.', red: true },
];
