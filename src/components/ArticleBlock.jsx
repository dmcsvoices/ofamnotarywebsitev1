import React from 'react'
import ArticleTitle from './ArticleTitle'
import ArticleText from './ArticleText_whereToBuy'

function ArticleBlock(props) {
  return (
    <div>
        <ArticleTitle titleText = {props.articleTitle} />
    </div>
  )
}

export default ArticleBlock