const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function convertSvgToPng() {
  try {
    // SVG 내용을 직접 Canvas에 그리기
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext('2d');
    
    // 배경 그라데이션
    const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);
    
    // 메인 카드 배경
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.roundRect(80, 80, 1040, 470, 20);
    ctx.fill();
    
    // 제목
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 72px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🚀 대충한국어', 600, 200);
    
    // 부제목
    ctx.fillStyle = '#667eea';
    ctx.font = '600 36px Arial';
    ctx.fillText('4배속 스피드 러닝의 혁명', 600, 270);
    
    // 설명
    ctx.fillStyle = '#495057';
    ctx.font = '28px Arial';
    ctx.fillText('하버드 16배속 공부법으로 완성하는', 600, 340);
    ctx.fillText('효율적인 한국어 학습', 600, 380);
    
    // 강조 박스
    const boxGradient = ctx.createLinearGradient(200, 420, 1000, 500);
    boxGradient.addColorStop(0, '#4ecdc4');
    boxGradient.addColorStop(1, '#44a08d');
    ctx.fillStyle = boxGradient;
    ctx.roundRect(200, 420, 800, 80, 15);
    ctx.fill();
    
    // 강조 텍스트
    ctx.fillStyle = 'white';
    ctx.font = '600 24px Arial';
    ctx.fillText('일상생활에서 바로 쓸 수 있는', 600, 450);
    ctx.fillText('실용 한국어 1,800문장 마스터', 600, 480);
    
    // 장식 원형들
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.arc(150, 460, 25, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(1050, 460, 25, 0, 2 * Math.PI);
    ctx.fill();
    
    // 아이콘 텍스트
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('4x', 150, 470);
    ctx.fillText('🧠', 1050, 470);
    
    // PNG로 저장
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('og-image.png', buffer);
    
    console.log('SVG to PNG conversion completed successfully!');
  } catch (error) {
    console.error('Error converting SVG to PNG:', error);
  }
}

// Canvas roundRect polyfill
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  this.beginPath();
  this.moveTo(x + r, y);
  this.arcTo(x + w, y, x + w, y + h, r);
  this.arcTo(x + w, y + h, x, y + h, r);
  this.arcTo(x, y + h, x, y, r);
  this.arcTo(x, y, x + w, y, r);
  this.closePath();
  return this;
};

convertSvgToPng();