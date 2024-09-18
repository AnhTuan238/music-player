const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'SONG_PLAYER';

const heading = $('header h2');
const author = $('header h3');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');
const currentTimeElement = $('#currentTime');
const durationTimeElement = $('#durationTime');
const lyric_text = $('.lyric_text');
const lyric_name = $('.lyric_name');
const listTablet = $('.nav__mobile');
let previousSpanElement = null;
let currentIndex = 0;

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
    {
        name: 'Lối nhỏ',
        singer: 'Đen Vâu',
        path: './assets/music/song1.mp3',
        image: './assets/img/song1.jpg',
        lyric: '<span id="lyric1">♪ Em vào đời bằng đại lộ, anh vào đời bằng lối nhỏ ♪</span>' +
        '<span id="lyric2"><br>♪ Anh nhớ mình đã từng thổ lộ, anh nhớ rằng em đã chối bỏ ♪</span>'+
        '<span id="lyric3"><br>♪ Anh nhớ chuyến xe buổi tối đó, trên xe chỉ có một người ngồi ♪</span>'+
        '<span id="lyric4"><br>♪ Anh thấy thật buồn nhưng nhẹ nhõm, anh nhớ mình đã mỉm cười rồi ♪</span>'+
        '<span id="lyric5"><br>♪ Anh nghĩ anh cần cảm ơn em, vì những gì mà anh đã nếm trải ♪</span>'+
        '<span id="lyric6"><br>♪ Kỉ niệm sẽ là thứ duy nhất, Đi theo anh cả cuộc đời dài ♪</span>'+
        '<span id="lyric7"><br>♪ Nếu không có gì để nhớ về, anh sợ lòng mình khô nứt nẻ ♪</span>'+
        '<span id="lyric8"><br>♪ Hình dung em như là Nữ Oa, có thể vá tâm hồn này sứt mẻ ♪</span>'+
        '<span id="lyric9"><br>♪ Anh thường một mình, tìm đến nơi có nhiều cây cối ♪</span>'+
        '<span id="lyric10"><br>♪ Nghĩ về những ngày tàn, đã trôi qua theo chiều tay với ♪</span>'+
        '<span id="lyric11"><br>♪ Cũng chẳng nghĩ nhiều, anh không mong những điều may tới ♪</span>'+
        '<span id="lyric12"><br>♪ Vài Nỗi buồn đã cũ , sao bỗng nhiên giữa chiều nay mới ♪</span>'+
        '<span id="lyric13"><br>♪ Anh vẫn thường nghe, thời Trống vắng hay là Kiếp ve sầu ♪</span>'+
        '<span id="lyric14"><br>♪ Những giấc mộng non, như tán lá cây xanh biếc che đầu ♪</span>'+
        '<span id="lyric15"><br>♪ Tình yêu thật ra đơn giản như là một cái bánh bao chay ♪</span>'+
        '<span id="lyric16"><br>♪ Thắp lên lửa nhỏ, hơn là cứ đi tìm hái ánh sao bay. ♪</span>'+
        '<span id="lyric17"><br>♪ Đường xa quá, lắm lúc thấy mình lẻ loi ♪</span>'+
        '<span id="lyric18"><br>♪ Người đã đến, vui đấy, nhưng rồi cũng đi ♪</span>'+
        '<span id="lyric19"><br>♪ Chạm lên trái tim thấy cơn mơ còn cháy nồng ♪</span>'+
        '<span id="lyric20"><br>♪ Nhiều đêm trắng xoá bay , lòng như có gió đầu mùa ♪</span>'+
        '<span id="lyric21"><br>♪ Em vào đời từ cao tầng, anh vào đời từ mái lá ♪</span>'+
        '<span id="lyric22"><br>♪ Thế nên những điều anh mong cầu, không bao giờ là thái quá ♪</span>'+
        '<span id="lyric23"><br>♪ Những thứ anh làm thường đơn giản, nên không hay được đánh giá cao ♪</span>'+
        '<span id="lyric24"><br>♪ Vài người thường ăn hải sản, rồi lại chê bai mùi cá ao ♪</span>'+
        '<span id="lyric25"><br>♪ Giống như con người anh, dễ nắm bắt và dễ chịu ♪</span>'+
        '<span id="lyric26"><br>♪ Bài hát này không sâu xa, rất dễ nghe và dễ hiểu ♪</span>'+
        '<span id="lyric27"><br>♪ Anh không có nhiều lưu ý, anh cảm thấy mình dễ chiều ♪</span>'+
        '<span id="lyric28"><br>♪ Đây không phải là nhạc buồn, đây thứ nhạc để chill ♪</span>'+
        '<span id="lyric29"><br>♪ Em vào đời bằng náo nhiệt, anh vào đời bằng âm thầm ♪</span>'+
        '<span id="lyric30"><br>♪ Em đi tìm nốt thăng hoa, lòng anh lại là âm trầm ♪</span>'+
        '<span id="lyric31"><br>♪ Em đi tìm lời phố thị, anh đi tìm tiếng ghi-ta ♪</span>'+
        '<span id="lyric32"><br>♪ Em đưa anh vào trong náo nhiệt, Anh lắc đầu và đi ra ♪</span>'+
        '<span id="lyric33"><br>♪ Em vào đời bằng vang đỏ, anh vào đời bằng nước trà ♪</span>'+
        '<span id="lyric34"><br>♪ Bằng cơn mưa thơm mùi đất, bằng hoa dại mọc trước nhà ♪</span>'+
        '<span id="lyric35"><br>♪ Em vào đời bằng kế hoạch, anh vào đời bằng mộng mơ ♪</span>'+
        '<span id="lyric36"><br>♪ Lý trí em là công cụ, trái tim anh là động cơ ♪</span>'+
        '<span id="lyric37"><br>♪ Em vào đời nhiều đồng nghiệp , anh vào nhiều thân tình ♪</span>' +
        '<span id="lyric38"><br>♪ Anh chỉ muốn chân mình đạp đất, không muốn đạp ai dưới chân mình ♪</span>'+
        '<span id="lyric39"><br>♪ Em vào đời bằng mây trắng, em vào đời bằng nắng xanh ♪</span>'+
        '<span id="lyric40"><br>♪ Em vào đời bằng đại lộ, con đường đó giờ vắng anh ♪</span>'+
        '<span id="lyric41"><br>♪ Đường xa quá, lắm lúc thấy mình lẻ loi ♪</span>'+
        '<span id="lyric42"><br>♪ Người đã đến, vui đấy, nhưng rồi cũng đi ♪</span>'+
        '<span id="lyric43"><br>♪ Chạm lên trái tim thấy cơn mơ còn cháy nồng ♪</span>'+
        '<span id="lyric44"><br>♪ Nhiều đêm trắng xoá bay , lòng như có gió đầu mùa ♪</span>'+
        '<span id="lyric45"><br>♪ Đường xa quá, lắm lúc thấy mình lẻ loi ♪</span>'+
        '<span id="lyric46"><br>♪ Người đã đến, vui đấy, nhưng rồi cũng đi ♪</span>'+
        '<span id="lyric47"><br>♪ Chạm lên trái tim thấy cơn mơ còn cháy nồng ♪</span>'+
        '<span id="lyric48"><br>♪ Nhiều đêm trắng xoá bay , lòng như có gió đầu mùa ♪</span>',

        timeNode: [
            '73',
            '76.5',
            '79',
            '81.5',
            '84',
            '87',
            '89',
            '92',
            '94.5',
            '97',
            '99',
            '102',
            '105',
            '108',
            '110',
            '113',
            '115.5',
            '119',
            '125',
            '130',
            '136',
            '139',
            '141',
            '143.5',
            '147',
            '149',
            '151.5',
            '154',
            '157',
            '160',
            '162',
            '165',
            '168',
            '170',
            '173',
            '175',
            '177.25',
            '179.5',
            '182.5',
            '185.5',
            '188',
            '193',
            '198',
            '203',
            '208.5',
            '212.5',
            '219',
            '224',
            '230',
        ]
    },

    {
        name: 'See you again',
        singer: 'Charlie Puth',
        path: './assets/music/song2.mp3',
        image: './assets/img/song2.jpg',
        lyric: 'Updating...'
    },
    {
        name: 'Cạn tình như thế',
        singer: 'Cao Thái Học',
        path: './assets/music/song3.mp3',
        image: './assets/img/song3.jpg',
        lyric: 
        '<span id="lyric1">♪ Tình rơi vào nơi tuyệt vọng, mỗi đứa một khoảng trời rộng ♪</span>'+
        '<span id="lyric2"><br>♪ Bình phong anh chỉ là tấm bia, cho em đỡ buồn ♪</span>'+
        '<span id="lyric3"><br>♪ Tương lai nay mai gia đình, ♪</span>'+
        '<span id="lyric4"><br>♪ chẳng vẹn nguyên em thay áo mình cho cho người khác... ♪</span>'+
        '<span id="lyric5"><br>♪ Đập tay vào trong lồng ngực, cắn lên môi nén đau chấp nhận ♪</span>'+
        '<span id="lyric6"><br>♪ Thấy đứa con từ nay không mẹ nữa rồi... ♪</span>'+
        '<span id="lyric7"><br>♪ Tình chàng ý thiếp cạn tàu ráo máng ♪</span>'+
        '<span id="lyric8"><br>♪ Nghĩa vợ chồng giống như đống tàn tro... ♪</span>'+
        '<span id="lyric9"><br>♪ Cứa lên da vết thương không lành, ♪</span>'+
        '<span id="lyric10"><br>♪ để thời gian nhắc ta đã một lần đau đớn... ♪</span>'+
        '<span id="lyric11"><br>♪ Cạn tàu ráo máng, đối xử nhau hơn cả chữ đau ♪</span>'+
        '<span id="lyric12"><br>♪ Nát tan hết tấm chân tình, thế hai từ đau thương ♪</span>'+
        '<span id="lyric13"><br>♪ Ngắt lên da biết bao nhiêu lần... ♪</span>'+
        '<span id="lyric14"><br>♪ Liệu rằng có thấy đau không mà kịp né tránh ♪</span>'+
        '<span id="lyric15"><br>♪ Cùng từng chăn gối, trao vị ngọt đôi môi thế thôi ♪</span>'+
        '<span id="lyric16"><br>♪ Chỉ tay lên trời nhắc ta không được nhớ ♪</span>'+
        '<span id="lyric17"><br>♪ Đập tay vào trong lồng ngực, cắn lên môi nén đau chấp nhận ♪</span>'+
        '<span id="lyric18"><br>♪ Thấy đứa con từ nay không mẹ nữa rồi ♪</span>'+
        '<span id="lyric19"><br>♪ Tình chàng ý thiếp cạn tàu ráo máng ♪</span>'+
        '<span id="lyric20"><br>♪ Nghĩa vợ chồng giống như đống tàn tro ♪</span>'+
        '<span id="lyric21"><br>♪ Cứa lên da vết thương không lành ♪</span>' +
        '<span id="lyric22"><br>♪ Để thời gian nhắc ta đã một lần đau đớn... ♪</span>'+
        '<span id="lyric23"><br>♪ Cạn tàu ráo máng đối xử nhau hơn cả chữ đau ♪</span>'+
        '<span id="lyric24"><br>♪ Nát tan hết tấm chân tình, thế hai từ đau thương ♪</span>'+
        '<span id="lyric25"><br>♪ Ngắt lên da biết bao nhiêu lần... ♪</span>'+
        '<span id="lyric26"><br>♪ liệu rằng có thấy đau không mà kịp né tránh ? ♪</span>'+
        '<span id="lyric27"><br>♪ Cũng từng chăn gối, trao vị ngọt đôi môi thế thôi... ♪</span>'+
        '<span id="lyric28"><br>♪ Chỉ tay lên trời nhắc ta, không được nhớ... ♪</span>'+
        '<span id="lyric29"><br>♪ Cứa lên da vết thương không lành, ♪</span>'+
        '<span id="lyric30"><br>♪ để thời gian nhắc ta đã một lần đau đớn... ♪</span>'+
        '<span id="lyric31"><br>♪ Cạn tàu ráo máng, đối xử nhau hơn cả chữ đau ♪</span>'+
        '<span id="lyric32"><br>♪ Nát tan hết tấm chân tình, thế hai từ đau thương...♪</span>'+
        '<span id="lyric33"><br>♪ Ngắt lên da biết bao nhiêu lần, ♪</span>'+
        '<span id="lyric34"><br>♪ liệu rằng có thấy đau không mà kịp né tránh ? ♪</span>'+
        '<span id="lyric35"><br>♪ Cũng từng chăn gối, trao vị ngọt đôi môi thế thôi... ♪</span>'+
        '<span id="lyric36"><br>♪ Chỉ tay lên trời nhắc ta không được nhớ... ♪</span>'+
        '<span id="lyric37"><br>♪ Chỉ tay lên trời nhắc ta không được nhớ... ♪</span>',

        timeNode: [
            '41.5',
            '47',
            '52',
            '55',
            '63',
            '70',
            '75',
            '81',
            '87',
            '90.5',
            '97.25',
            '102.75',
            '109',
            '112.5',
            '120',
            '125.5',
            '154',
            '160',
            '165',
            '170.5',
            '177',
            '180.5',
            '187.5',
            '193',
            '199',
            '204',
            '210',
            '215.5',
            '222.5',
            '226',
            '233',
            '237.75',
            '245',
            '249',
            '255',
            '260.5',
            '266',
            '278',
        ],

    },


    {
        name: 'Gió nổi lên rồi',
        singer: 'MinL',
        path: './assets/music/song4.mp3',
        image: './assets/img/song4.jpg',
        lyric: 'Updating...'
    },
    {
        name: 'Hôm nay em cưới rồi',
        singer: 'Khải Đăng',
        path: './assets/music/song5.mp3',
        image: './assets/img/song5.jpg',
        lyric: 'Updating...'
    },
    {
        name: 'Khoá ly biệt',
        singer: 'Anh Tú',
        path: './assets/music/song6.mp3',
        image: './assets/img/song6.jpg',
        lyric: 'Updating...'

    },
    {
        name: 'Ngày em đẹp nhất',
        singer: 'Tama',
        path: './assets/music/song7.mp3',
        image: './assets/img/song7.jpg',
        lyric: 'Updating...'
    },
    {
        name: 'Let her go',
        singer: 'Passenger',
        path: './assets/music/song8.mp3',
        image: './assets/img/song8.jpg',
        lyric: 'Updating...'
    },
    {
        name: 'Đánh mất em',
        singer: 'Quang Đăng Trần',
        path: './assets/music/song9.mp3',
        image: './assets/img/song9.jpg',
        lyric: 'Updating...' 
    },
    {
        name: 'Sai người sai thời điểm',
        singer: 'Thanh Hưng',
        path: './assets/music/son200.mp3',
        image: './assets/img/song10.jpg',
        lyric: 'Updating...'
    }

    ],

    // Cấu hình
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },

    // Render playlist_PC
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active': ''}" data-index="${index}">
                
                <div class="thumb"
                    style="background-image: url('${song.image}');">      
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="${index === this.currentIndex ? 'music': ''}">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>    
            </div>`
        })
        
        playlist.innerHTML = htmls.join('');
    }, 

    // Render playlist_Tablet_&_Mobile
    renderTablet: function() {
        const htmlsa = this.songs.map((song, index) => {
            return `
                 <div class="song ${index === this.currentIndex ? 'active': ''}" data-index="${index}">
                    <div class="thumb"
                        style="background-image: url('${song.image}');">      
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                     <div class="${index === this.currentIndex ? 'music': ''}">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
            `
        })

        listTablet.innerHTML = htmlsa.join('');
    },

    // Định nghĩa thuộc tính
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        });
    },

    // Xử lý sự kiện 
    handleEvents: function() {
        const _this = this;
        const cdWidth = cd.offsetWidth;

        // Xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)'}
        ], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        });

        // Xử lý chữ nhấp nháy
        setInterval(() => {
            heading.classList.toggle('flicker');
        },2000)

        // Pause thumb
        cdThumbAnimate.pause();

        // Xử lý phóng to / thu nhỏ CD
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }

        // Xử lý khi click play
        playBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                 audio.play();                 
                }
        };

        // Highlight lyrics
        function highlightLyric() {
            const currentTime = audio.currentTime;
            const spanElement = document.querySelector(`#lyric${currentIndex + 1 }`);
        
            if (currentTime >= _this.currentSong.timeNode[currentIndex]) {
                if (previousSpanElement ) {
                    previousSpanElement.classList.remove('highlight');
                }
        
                spanElement.classList.add('highlight');
                
                previousSpanElement = spanElement;
                currentIndex++;
        
                if (currentIndex >= _this.currentSong.timeNode.length) {
                    clearInterval(lyricInterval);
                }
            }
        };

        
        const lyricInterval = setInterval(highlightLyric, 200);

        // Khi song được play 
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing'); 
            cdThumbAnimate.play(); 
            currentIndex = 0;
            clearInterval(lyricInterval); 
            setInterval(highlightLyric, 200); 
              
        }

        // Khi song được pause 
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing');  
            cdThumbAnimate.pause(); 
            clearInterval(lyricInterval);
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100 );
                progress.value = progressPercent;
                progress.style.background = `linear-gradient(to right, purple ${progressPercent}%, white ${progressPercent}%)`;
                const currentMinutes = Math.floor(audio.currentTime / 60);
                const currentSeconds = Math.floor(audio.currentTime % 60);
                currentTimeElement.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;
            }
        };

        // Thời gian bài hát
        audio.onloadedmetadata = function() {
            const durationMinutes = Math.floor(audio.duration / 60);
            const durationSeconds = Math.floor(audio.duration % 60);
            durationTimeElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
        };

        // Xử lý khi tua song
        progress.onchange = function(e) {
            const seekTime =  (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        };

        // Khi next bài
        nextBtn.onclick = function() {
            if (_this.isRandom) {
            _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.renderTablet();
            _this.scrollToActiveSong();
        };

         // Khi prev bài
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.renderTablet();
            _this.scrollToActiveSong();
        };

        // Xử lý nút random
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom);
        };

        // Xử lý nút repeat
        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active', _this.isRepeat);
        };

        // Xử lý next song khi audio ended
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            } else {
            nextBtn.click();
            }
        };

        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)');
            if (songNode || e.target.closest('.option')) {
                //Xử lý khi click vào song
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }
            }
        };

        // Lắng nghe hành vi click vào playlist_Tablet&Mobile
        listTablet.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)');
            if (songNode || e.target.closest('.option')) {
                //Xử lý khi click vào song
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    // _this.render();
                    _this.renderTablet();

                    audio.play();
                }
            }
        };  
    },

        // Scroll
        scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }, 300)

    },

    // Tải thông tin bài nhạc
    loadCurrentSong: function() {
        heading.textContent = '🎶' + ' ' +this.currentSong.name + ' ' + '🎶';
        author.textContent = this.currentSong.singer;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path;
        lyric_text.innerHTML = this.currentSong.lyric;
        lyric_name.textContent = this.currentSong.name + ' ' + '-' + ' ' + 'Lyrics';
        
        // Tua audio
        document.addEventListener('keydown', function(event) {
            const skipTime = 5; 
            if(event.key === 'ArrowRight') {
                audio.currentTime = Math.min(audio.currentTime + skipTime, audio.duration);
            } else if(event.key === 'ArrowLeft') {
                audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
            }
        });
    },

    // Nạp cấu hình
    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;

    },

    // Khi chuyển bài
    nextSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong();
    },

    // Khi lùi bài
    prevSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1;
        }
        this.loadCurrentSong();
    },

    // Random
    playRandomSong: function() {
        let newIndex;
        do {
           newIndex = Math.floor(Math.random() * this.songs.length) ;  
        } while (newIndex === this.currentIndex);

        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    // Hàm chạy các hàm xử lý
    start: function() {
        // Gán cấu hình từ config vào ứng dụng
        this.loadConfig();

        // Định nghĩa các thuộc tính cho object
        this.defineProperties();

        // Lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        // Render playlist
        this.render();
        this.renderTablet();

        // Hiển thị trạng thái ban đầu của button repeat và random
        randomBtn.classList.toggle('active', this.isRandom);
        repeatBtn.classList.toggle('active', this.isRepeat);
    }
};

app.start()
