import data from './data.js'

class Dog {
    constructor(data) {
        Object.assign(this, data)
        this.badge = this.getBadgeHtml()
    }

    getBadgeHtml() {
        return (!this.hasBeenLiked && this.hasBeenSwiped) ?
        `<img class="badge" src="badge-nope.png">` :
        this.hasBeenLiked ?
        `<img class="badge" src="badge-like.png">` : {}
    }

    getDogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
            
            return `
                <div id="profile">
                    <figure class="txtover">
                    <img id="profile-pic" src="${avatar}">
                    <figcaption>
                    <div id="badge-img"></div>
                    <div id="bio-div">
                    <h3> ${name}, ${age}</h3>
                    <h4>${bio}</h4>
                    </div>
                    </figcaption>
                    </figure>
                </div>
                `
    }
}
export default Dog