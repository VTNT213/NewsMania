import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class News extends Component {
    articles = [
        // {
        //     "source": {"id": "news24", "name": "News24"},
        //     "author": "Sibusiso Mjikeliso",
        //     "title": "Cricket SA wants to 'get to the bottom' of Nkwe resignation concerns, says CEO | Sport",
        //     "description": "Acting Cricket South Africa CEO Pholetsi Moseki says the board is concerned about the issues former Proteas assistant coach Enoch Nkwe raised in his resignation.",
        //     "url": "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-wants-to-get-to-the-bottom-of-nkwe-resignation-concerns-says-ceo-20210826",
        //     "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg",
        //     "publishedAt": "2021-08-26T11:40:16+00:00",
        //     "content": "<ul><li>Cricket South Africa has committed to \"getting to the bottom\" of Enoch Nkwe's sudden resignation as Proteas assistant coach. </li><li>Nkwe voiced concerns with the current culture and working… [+3497 chars]"
        // },
        // {
        //     "source": {"id": "abc-news-au", "name": "ABC News (AU)"},
        //     "author": "ABC News",
        //     "title": "England cricket great Ted Dexter dies aged 86",
        //     "description": "The former England captain, nicknamed \"Lord Ted\", is fondly remembered as a giant of the game and one of his country's greatest players.",
        //     "url": "http://www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
        //     "urlToImage": "https://live-production.wcms.abc-cdn.net.au/1006c7ecf34ec0935eef2aade5017711?impolicy=wcms_crop_resize&cropH=2815&cropW=5004&xPos=0&yPos=223&width=862&height=485",
        //     "publishedAt": "2021-08-26T09:07:52Z",
        //     "content": "Former England captain Ted Dexter has died aged 86 following a recent illness.\r\n<ul><li>Dexter played 62 Tests for England and was captain on 30 occasions</li><li>He was inducted into the ICC Hall of… [+1746 chars]"
        // },
        // {
        //     "source": {"id": "espn-cric-info", "name": "ESPN Cric Info"},
        //     "author": null,
        //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        //     "publishedAt": "2020-04-27T11:41:47Z",
        //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        // },
        // {
        //     "source": {"id": "espn-cric-info", "name": "ESPN Cric Info"},
        //     "author": null,
        //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        //     "publishedAt": "2020-03-30T15:26:05Z",
        //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        // }
    ]

    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category:'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        }
    }


    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=c921ad002c294338a6db95b571220f40&pageSize=${this.props.pageSize}&page=1`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, 
            totalResults: parsedData.totalResults, 
            loading: false });
    }

    handlePrevClick = async () => {
        if (this.state.page > 1) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c921ad002c294338a6db95b571220f40&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading: false
            });
        }
    }

    handleNextClick = async () => {
        console.log("Next");
        if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c921ad002c294338a6db95b571220f40&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
            let data = await fetch(url);
            this.setState({loading: true});
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            });
        }
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <h1 className='text-center' style={{margin: '30px 0px', marginTop: '90px'}}>Trending Topics</h1>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {this.state.articles && this.state.articles.length > 0 ? this.state.articles.map((element) => {
                            return (
                                <div className='col-md-4 my-4' key={element.url}>
                                    <Newsitem 
                                        title={element.title} 
                                        description={element.description ? element.description.slice(0, 80) : "No description available"} 
                                        imageUrl={element.urlToImage} 
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                    />
                                </div>
                            )
                        }) : <div className='text-center'>No new articles to display</div>}
                    </div>
                </div>
                <div className="d-flex justify-content-between mx-4">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark btn-sm" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-warning btn-sm" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
