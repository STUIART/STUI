// 生成随机数函数
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 生成一个范围在1到100之间的随机数
var randomNumber = generateRandomNumber(1, 100);
console.log("随机数为：" + randomNumber);
