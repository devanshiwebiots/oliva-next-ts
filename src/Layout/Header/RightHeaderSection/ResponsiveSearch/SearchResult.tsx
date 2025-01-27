import SVG from '@/CommonComponent/SVG/Svg';
import { SearchResultProp } from '@/Types/LayoutTypes';
import Link from 'next/link';
import React from 'react';
import { Fragment } from 'react'

const SearchResult: React.FC<SearchResultProp> = ({ suggestion }) => {
    return (
        <Fragment>
            <div className={`Typeahead-menu custom-scrollbar ${suggestion.length > 0 ? "is-open" : ""}`} id="search-outer">
                <div className="header-search-suggestion custom-scrollbar">
                    {suggestion.map((item: any, i: number) => (
                        <div className="ProfileCard u-cf" key={i}>
                            <div className="ProfileCard-details">
                                <div className="ProfileCard-realName">
                                    <Link className="realname  w-100 d-flex justify-content-start gap-2" href={item.url}>
                                        <SVG iconId={`stroke-${item.icon}`} />
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Typeahead-menu empty-menu">
                <div className="tt-dataset tt-dataset-0">
                    <div className="EmptyMessage">{'Opps!! There are no result found.'}</div>
                </div>
            </div>
        </Fragment>
    )
}
export default SearchResult;