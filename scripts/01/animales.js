mostrarAnimal = (color) => {
    switch (color) {
        case 'rojo':
            console.log('🦀 🦞 🦐 🦜 🐙');
            break;
        case 'verde':
            console.log('🐸 🐊 🐢 🦎 🐍 🐲 🐉 🦕 🦖');
            break;
        case 'azul':
            console.log('🐳🐋🐬🐟🦈');
            break;
        default:
            console.log('🦓 🦌 🐮 🐷 🐗 🐘 🦏 🦛 🐹 🐰 🐿')
            break;
    }
}

module.exports = {
    mostrarAnimal
}