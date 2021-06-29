document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, secend] = row.toLocaleLowerCase().trim().split('_');
    const output = `${first}${secend.replace(
      secend[0],
      secend[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'🆗'.repeat(i + 1)}`);
  }
});
