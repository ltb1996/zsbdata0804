/**
 * 简化版背景音乐播放系统
 * 使用本地MP3文件播放
 */
class SimpleAudioPlayer {
    constructor() {
        this.audio = null;
        this.isPlaying = false;
        this.volume = 0.3;
        this.init();
    }
    
    init() {
        // 创建音频元素
        this.audio = new Audio();
        this.audio.src = './static/78999.mp3';
        this.audio.loop = true;
        this.audio.volume = this.volume;
        
        // 预加载音频
        this.audio.load();
    }
    
    play() {
        if (!this.audio) return;
        
        // 处理自动播放限制
        const playPromise = this.audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('音频播放需要用户交互');
            });
        }
        
        this.isPlaying = true;
    }
    
    pause() {
        if (this.audio && !this.audio.paused) {
            this.audio.pause();
            this.isPlaying = false;
        }
    }
    
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        if (this.audio) {
            this.audio.volume = this.volume;
        }
    }
    
    // 检查音频文件是否存在
    isAudioAvailable() {
        return this.audio && this.audio.src;
    }
}

// 全局音频播放器
window.simpleAudioPlayer = new SimpleAudioPlayer();