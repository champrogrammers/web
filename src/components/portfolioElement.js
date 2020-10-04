import React, { Component } from 'react';
import "../styles/portfolio.css";

//Texts
import texts from '../texts/portfolio.json';

class portfolioElment extends Component {


    render() {

        function getTags(tags) {
            const arrTags = [];
            tags.forEach((tag, index) => {
                arrTags.push(
                    <span key={index}>{tag}</span>
                );
            });
            return (
                arrTags
            )
        }

        const items = [];

        texts.works.forEach((work, index) => {
            items.push(
                <div key={index} className="itm">
                    <div className="work-photo">
                        <img src={work.image} alt={work.title} />
                    </div>
                    <div className="work-text">
                        <h3> {work.title} </h3>
                        <p> {work.info} </p>
                        <div id="tags">
                            {getTags(work.tags)}
                        </div>
                        <div className="work-buttons">
                            <button onClick={() => { window.location.href = work.link }}>
                                Ir a desarrollo
                            </button>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            items
        )
    }
}

export default portfolioElment;