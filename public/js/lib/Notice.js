class NoticeClass {
    #rootElement;
    constructor() {
        let body = document.body;
        this.#rootElement = document.createElement('div');
        this.#rootElement.style.cssText = `gap: 10px; box-sizing: border-box; padding: 10px 0; display: flex; flex-direction: column-reverse; position: fixed; right: -20%; width: 20%; height: 100vh;`;
        body.prepend(this.#rootElement);
    }

    createNotice(options) {
        console.log('notice created!')
        let newNotice = document.createElement('div');
        newNotice.innerHTML = `
        <div>
            <h2>${options.title}</h2>
            <p>${options.body}</p>
        </div>
        `;
        newNotice.style.cssText = `user-select: none;cursor: pointer;box-sizing: border-box; padding: 10px; background: #FFFFFF; border: 3px solid black; transition: 1s;`;
        setTimeout(() => {
            console.log('123')
            newNotice.style.transform = 'translateX(-110%)'
        }, 200);

        let removeTimeout = setTimeout(() => {
            newNotice.style.transform = 'translateX(0)';
            setTimeout(() => {
                newNotice.remove();
            }, 1100)
        }, 10000);

        newNotice.addEventListener('click', () => {
            clearTimeout(removeTimeout);
            newNotice.style.transform = 'translateX(0)';
            setTimeout(() => {
                newNotice.remove();
            }, 1100)
        })

        this.#rootElement.append(newNotice);
    }
}

let Notice = new NoticeClass();
export default Notice;
