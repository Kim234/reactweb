import React from 'react';

/*식당, 메뉴 db 만들기 용도2 */
class ForAdd extends React.Component {
    
    constructor(props){
        super(props)
        this.form = {
            cafeterianame:React.createRef(),
            isSpicy:React.createRef(),
            hasSoup:React.createRef(),
            price:React.createRef(),
            url:React.createRef(),
            isReserve:React.createRef(),
            people_come:React.createRef(),
            time_come:React.createRef()
        }
        this.submit = this.submit.bind(this)
    }

    async submit(){
        const data = {
            cafeterianame: this.form.cafeterianame.current.value,
            isSpicy: this.form.isSpicy.current.value,
            hasSoup: this.form.hasSoup.current.value,
            price: this.form.price.current.value,
            url:this.form.url.current.value,
            isReserve: this.form.isReserve.current.value,
            people_come: this.form.people_come.current.value,
            time_come:this.form.time_come.current.value
        }

        const echo_result = await this.props.onSubmit(data);
        console.log("뭐지"+echo_result);
    }


    render(){
        return (
            <div>
                <span><h3>Movie Review</h3></span>
                <p>
                    <label>I'm gonna review  </label>
                    <input ref={this.form.cafeterianame} ></input>
                </p>
                <p>
                    <label>My review is  </label>
                    <input ref={this.form.isSpicy}></input>
                </p>
                <p>
                    <label>So, I'll give this movie a rating of  </label>
                    <input ref={this.form.hasSoup}></input>
                </p>
                <p>
                    <label>imgurl  </label>
                    <input ref={this.form.price}></input>
                </p>
                <p>
                    <label>I'm gonna review  </label>
                    <input ref={this.form.url} ></input>
                </p>
                <p>
                    <label>My review is  </label>
                    <input ref={this.form.isReserve}></input>
                </p>
                <p>
                    <label>So, I'll give this movie a rating of  </label>
                    <input ref={this.form.people_come}></input>
                </p>
                <p>
                    <label>imgurl  </label>
                    <input ref={this.form.time_come}></input>
                </p>
                <button onClick={this.submit}>OK</button>
            </div>
        );
    }
}

export default ForAdd;