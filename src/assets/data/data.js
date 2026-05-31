export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Chiva Olivia Bilah, S.Pd.,S.Kom.,M.Eng',
            child: 'Putri ke 2',
            father: 'Bapak Letda POM (Purn) Ong Muraza Bilah, S.H.',
            mother: 'Ibu Yosephiene Marieanna Purukan',
            image: 'src/assets/images/foto_chiva.jpeg',
			address: 'Dusun Kembang, Madurejo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta'
			
        },
        P: {
            id: 2,
            name: 'Ngali Winahyu, S.T',
            child: 'Putra ke 2',
            father: 'Bapak Nasrip',
            mother: 'Ibu Suwarni',
            image: 'src/assets/images/test.jpeg',
			address: 'Dusun Toyo, Waruk Kalong, Kec. Kwadungan, Kabupaten Ngawi, Jawa Timur'
        },
        couple: 'src/assets/images/foto_karikatur.png'
    },
    time: {
        marriage: {
            year: '2026',
            month: 'Agustus',
            date: '16',
            day: 'Minggu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Agustus',
            date: '16',
            day: 'Minggu',
            hours: {
                start: '11.30',
                finish: 'Selesai'
            }
        },
        address: 'Auditorium UPN Veteran Yogyakarta'
    },
    link: {
        calendar: 'https://calendar.app.google/sRdE6DMcLrarXtYX7',
        map: 'https://maps.app.goo.gl/99Cab42rfQxUj5HT6',
    },
    galeri: [
        { id: 1, image: 'src/assets/images/1.jpeg' },
        { id: 2, image: 'src/assets/images/2.jpeg' },
        { id: 3, image: 'src/assets/images/3.jpeg' },
        { id: 4, image: 'src/assets/images/4.jpeg' },
        { id: 5, image: 'src/assets/images/5.jpeg' }
    ],
story: [
    {
        title: 'Bagian Satu',
        description: 'Kisah tentang bagaimana takdir bekerja dengan cara yang paling tenang, namun paling pasti. Sebuah perjalanan yang tidak dimulai dengan debar jantung yang hebat, melainkan dengan restu yang mengalir begitu saja.'
    },
    {
        title: 'Harapan',
        description: 'Perkenalan kami  bermula dari Om Chiva, seorang pria yang kasih sayangnya kepada keponakannya melampaui kata-kata. Hingga suatu hari, Chiva berangkat Umroh. Di bawah langit Mekkah yang teduh, ia bersimpuh meminta yang terbaik bagi masa depannya.'
    },
    {
        title: 'Membuka Pintu Komunikasi',
        description: 'Di saat yang bersamaan, ribuan kilometer jauhnya, di sebuah sudut ruang kerja, aku Ali duduk tepat di sebelah Om Chiva. Tanpa direncanakan, momen  itu tiba hari itu juga. Foto Chiva ditunjukan kepada Ali  dengan keberanian yang tenang, yang akhirnya membuka pintu komunikasi kami.'
    },
    {
        title: 'Komunikasi dan Ketegasan',
        description: 'Kami mulai bertukar pesan. Tidak ada rayuan maut, tidak ada percakapan intens,hanya komunikasi dua orang dewasa yang saling menjajaki dalam ritme yang sangat santai. Momen Lebaran membuat ketegasan takdir diuji saat Idul Fitri tiba kami memutuskan untuk bertemu secara langsung untuk pertama kalinya. Pertemuan itu singkat namun hangat, Akhirnya restu kedua orang tua sudah di tangan, untuk apa lagi menunggu?  Kami sepakat memutuskan menuju garis finis yang sesungguhnya: "Pernikahan."'
    },
    {
        title: 'Menuju Pelaminan',
        description: 'Alhamdulillah, Allah meridhoi perjalanan kasih kami. Kami siap melangkah ke jenjang pernikahan. Tanpa pacaran, tanpa kata-kata puitis yang berlebihan, kami menyepakati bahwa cinta tidak selalu harus meledak-ledak diawal,dari sebuah  foto yang ditunjukan di tempat kerja, berakhir menjadi janji suci di depan penghulu.'
    }
],
    bank: [
        {
            id: 1,
            name: 'Ngali Winahyu',
            icon: 'src/assets/images/bca.png',
            rekening: '1870580807'
        },
        {
            id: 2,
            name: 'Chiva Olivia',
            icon: 'src/assets/images/bri.png',
            rekening: '155801003444504'
        },
	
    ],
address: {
    name: 'Rumah Mempelai Wanita',
    detail: 'Jalan Kembang Madurejo Nomor.61, RT. 03, RW. 01, Kembang, Madurejo (Rumah Tingkat), Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta, Kode Pos 55572',
    map: 'https://maps.app.goo.gl/PUPUbFor6Z1Kf7D36'
},
    audio: 'src/assets/audio/wedding.mp3',
    api: 'https://script.google.com/macros/s/AKfycbyt6Ulgbfrmm9pisIlLKnt_GdL-ozqDoaAOozU4csb1I044sZ-QKnQi1YZ1XpUCCdtNWw/exec',
    navbar: [
        { id: 1, teks: 'Home', icon: 'bx bxs-home-heart', path: '#home' },
        { id: 2, teks: 'Mempelai', icon: 'bx bxs-group', path: '#bride' },
        { id: 3, teks: 'Tanggal', icon: 'bx bxs-calendar-check', path: '#time' },
        { id: 4, teks: 'Galeri', icon: 'bx bxs-photo-album', path: '#galeri' },
        { id: 5, teks: 'Ucapan', icon: 'bx bxs-message-rounded-dots', path: '#wishas' },
		{ id: 6, teks: 'Kisah', icon: 'bx bxs-heart', path: '#story' },
    ],
}
