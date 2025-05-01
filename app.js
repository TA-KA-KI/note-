function generate() {
  const input = document.getElementById('input').value;
  const mode = document.querySelector('input[name="mode"]:checked').value;
  const output = document.getElementById('output');

  if (!input.trim()) {
    output.innerText = 'キーワードを入力してください。';
    return;
  }

  if (mode === '構成') {
    output.innerText = `【構成案】\n1. 問題提起：${input}で悩んでいませんか？\n2. 共感パート：実は多くの人が…\n3. 解決策提示：副業noteならOK\n4. CTA：今すぐ始めよう`;
  } else {
    output.innerText = `【記事本文】\n「${input}で悩んでいませんか？」\nそんなあなたに向けて、今回はスマホ1台でできる副業noteをご紹介します。\n…（本文生成の例です）…\n\nあなたも今日から「note量産くん」で副業を始めてみませんか？`;
  }
}