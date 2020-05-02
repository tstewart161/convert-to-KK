class Audio {
    static context = new (window.AudioContext || window.webkitAudioContext)()
}

export default Audio