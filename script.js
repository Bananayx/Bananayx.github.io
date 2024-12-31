// 获取页面上用于显示倒计时的元素
const countdownElement = document.getElementById('countdown');

// 设置目标时间（下一年的1月1日0点0分0秒），这里获取当前年份并加1来确定下一年
const targetYear = 2025;
const targetDate = new Date(targetYear, 0, 1, 0, 0, 0);

// 定义一个函数用于更新倒计时显示
function updateCountdown() {
  const now = new Date();
  const timeDiff = targetDate - now;

  // 计算剩余的天数、小时数、分钟数、秒数
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // 格式化显示的字符串
  const displayText = `距离新年还有：${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
  countdownElement.textContent = displayText;

  // 如果时间差小于等于0，说明已经到新年了，可以进行相应提示（这里简单重置显示文本）
  if (timeDiff <= 0) {
    countdownElement.textContent = "新年快乐！";
    countdownElement.classList.remove('gradientAnimation');
  } else {
    // 每隔1秒更新一次倒计时（通过递归调用自身实现定时更新）
    setTimeout(updateCountdown, 1000);
  }
}

// 首次调用函数启动倒计时更新
updateCountdown();