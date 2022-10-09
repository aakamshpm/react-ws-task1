import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const Books=[
    {
        id:1,
        img:"https://m.media-amazon.com/images/I/81BfYDO0kSL._AC_UY218_.jpg",
        title:"World’s Best Inspirational Books to Change Your Life ",
        author:'by Joseph Murphy Dale Carnegie, Napoleon Hill | 1 November 2020',
        price: '₹259(48% off)',
        buy:'https://www.amazon.in/Worlds-Best-Inspirational-Books-Change/dp/819489882X/ref=sr_1_1_sspa?keywords=best+selling+books&qid=1665290417&qu=eyJxc2MiOiI2Ljg2IiwicXNhIjoiNi40OCIsInFzcCI6IjUuOTMifQ%3D%3D&s=books&sprefix=best+se%2Cstripbooks%2C302&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNUdCWE1aNEVJNzBFJmVuY3J5cHRlZElkPUEwNjQyMzQ2V0cwUlhFTExMV0ozJmVuY3J5cHRlZEFkSWQ9QTAwMDQ5OTdYVUhBUU1QOEJEQjgmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'
    },
    {
        id:2,
        img:'https://m.media-amazon.com/images/I/81FummIc2eL._AC_UY218_.jpg',
        title:'It Starts With Us',
        author:'Collen Hoover',
        price:'₹354(48% off)',
        buy:'https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_stripbooks_sr_pg1_1?ie=UTF8&adId=A0545490ASYCORVW7DGM&url=%2FAtomic-Habits-James-Clear%2Fdp%2F1847941834%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Dbest%2Bselling%2Bbooks%26qid%3D1665290417%26qu%3DeyJxc2MiOiI2Ljg2IiwicXNhIjoiNi40OCIsInFzcCI6IjUuOTMifQ%253D%253D%26s%3Dbooks%26sprefix%3Dbest%2Bse%252Cstripbooks%252C302%26sr%3D1-2-spons%26psc%3D1&qualifier=1665290417&id=3985319472347796&widgetName=sp_atf'
    },
    {
        id:3,
        img:'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY218_.jpg',
        title:'The Alchemist',
        author:'Paulo Coelho',
        price:'₹164(59% off)',
        buy:'https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988/ref=sr_1_2?keywords=the+alchemist&qid=1665294251&qu=eyJxc2MiOiIxLjY5IiwicXNhIjoiMS4xMiIsInFzcCI6IjEuMzQifQ%3D%3D&s=books&sprefix=the+alc%2Cstripbooks%2C453&sr=1-2'
    },
    {
        id:4,
        img:'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY218_.jpg',
        title:'Atomic Habits',
        author:'James Clear',
        price:'₹402(38% off)',
        buy:'https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_3?keywords=best+selling+books&qid=1665290417&qu=eyJxc2MiOiI2Ljg2IiwicXNhIjoiNi40OCIsInFzcCI6IjUuOTMifQ%3D%3D&s=books&sprefix=best+se%2Cstripbooks%2C302&sr=1-3'
    },
    {
        id:5,
        img:'https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg',
        title:'The Power of Your Subconscious Mind',
        author:'Joseph Murphy',
        price:'₹105(47% off)',
        buy:'https://www.amazon.in/Power-Your-Subconscious-Mind-Success/dp/8172345666/ref=sr_1_6?keywords=best+selling+books&qid=1665294342&qu=eyJxc2MiOiI2Ljg2IiwicXNhIjoiNi40OCIsInFzcCI6IjUuOTMifQ%3D%3D&s=books&sprefix=best+se%2Cstripbooks%2C302&sr=1-6'
    },
    {
        id:6,
        img:'https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY218_.jpg',
        title:'Ikigai',
        author:'Héctor García and Francesc Miralles',
        price:'₹257(53% off)',
        buy:'https://www.amazon.in/Ikigai-H%C3%A9ctor-Garc%C3%ADa/dp/178633089X/ref=sr_1_7?keywords=best+selling+books&qid=1665294342&qu=eyJxc2MiOiI2Ljg2IiwicXNhIjoiNi40OCIsInFzcCI6IjUuOTMifQ%3D%3D&s=books&sprefix=best+se%2Cstripbooks%2C302&sr=1-7'
    },
    {
        id:7,
        img:'https://m.media-amazon.com/images/I/71T0gqTHBFL._AC_UY218_.jpg',
        title:'Moment of Signal',
        author:'Sreedhar Bevara',
        price:'₹178(29% off)',
        buy:'https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_stripbooks_sr_pg1_1?ie=UTF8&adId=A05861821GVAEXC0X3MWH&url=%2FMoment-Signal-Signals-Change-Better%2Fdp%2F9389053021%2Fref%3Dsr_1_11_sspa%3Fkeywords%3Dbest%2Bselling%2Bbooks%26qid%3D1665294342%26qu%3DeyJxc2MiOiI2Ljg2IiwicXNhIjoiNi40OCIsInFzcCI6IjUuOTMifQ%253D%253D%26s%3Dbooks%26sprefix%3Dbest%2Bse%252Cstripbooks%252C302%26sr%3D1-11-spons%26psc%3D1%26smid%3DA3H3WE9M6NY1KV&qualifier=1665294342&id=1050529512258070&widgetName=sp_mtf'
    },
    {
        id:8,
        img:'https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_UY218_.jpg',
        title:'The Monk Who Sold Ferrari',
        author:'Robin Sharma',
        price:'₹152(39% off)',
        buy:'https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_stripbooks_sr_pg1_1?ie=UTF8&adId=A0493620CSLTWAK37JRK&url=%2FMonk-Who-Sold-His-Ferrari%2Fdp%2F817992162X%2Fref%3Dsr_1_12_sspa%3Fkeywords%3Dbest%2Bselling%2Bbooks%26qid%3D1665294342%26qu%3DeyJxc2MiOiI2Ljg2IiwicXNhIjoiNi40OCIsInFzcCI6IjUuOTMifQ%253D%253D%26s%3Dbooks%26sprefix%3Dbest%2Bse%252Cstripbooks%252C302%26sr%3D1-12-spons%26psc%3D1&qualifier=1665294342&id=1050529512258070&widgetName=sp_mtf'
    },
    {
        id:9,
        img:'https://m.media-amazon.com/images/I/71gpkRk86eS._AC_UY218_.jpg',
        title:'Think & Grow Rich',
        author:'Napoleon Hill',
        price:'₹94(46% off)',
        buy:'https://www.amazon.in/Think-Grow-Rich-Napoleon-Hill/dp/817234564X/ref=sr_1_14?keywords=best+selling+books&qid=1665294342&qu=eyJxc2MiOiI2Ljg2IiwicXNhIjoiNi40OCIsInFzcCI6IjUuOTMifQ%3D%3D&s=books&sprefix=best+se%2Cstripbooks%2C302&sr=1-14'
    },
    {
        id:10,
        img:'https://m.media-amazon.com/images/I/71I0wCu256L._AC_UY218_.jpg',
        title:'Be Your Own Sunshine',
        author:'James Allen',
        price:'₹80(54% off)',
        buy:'https://www.amazon.in/Your-Own-Sunshine-James-Allen/dp/9387022854/ref=sr_1_13?keywords=best+selling+books&qid=1665294342&qu=eyJxc2MiOiI2Ljg2IiwicXNhIjoiNi40OCIsInFzcCI6IjUuOTMifQ%3D%3D&s=books&sprefix=best+se%2Cstripbooks%2C302&sr=1-13'
    },
]
function BookList(){
    return(
        <section className="bookList">
                {Books.map((book)=>{
                    return <Book key={book.id} {...book}/>
                    })}
        </section>
    )
}


const Book=({img,title,author,price,buy})=>{
    return(
        <article className="book">
            <img src = {img} />
            <h1>{title}</h1>
            <h5>{author}</h5>
            <h2>{price}</h2>
            <a target='_blank' href={buy}>Buy This Book</a>
        </article>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<BookList />)
