const Logger = {
    log: (id, result) => {
        const message =`[Logger] Calculator ID: ${id}, Result: ${result}`;
        console.log(message);
    }
};

module.exports = Logger;