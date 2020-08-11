import React, { useState, useEffect } from 'react'
import marked from 'marked'

export default function Main() {
  const initialText = "# Header\n---\n## Sub header\n---\n[link](https://screenrant.com/homer-simpson-best-quotes/)\n\n`inline code`\n\n```\nmultiline\ncode\nblock\n```\n\n> Block quote\n\n- list item\n\n![image](https://static2.srcdn.com/wordpress/wp-content/uploads/2019/07/The-Simpsons-Homer-and-Marge.jpg?q=50&fit=crop&w=200&h=100)\n\nSimple text. **Bold Text!**"
  const [input, setInput] = useState(initialText)

  const handleChange = (e) => {
    setInput(e.target.value)
    parseMarkdown(e.target.value)
  }

  const parseMarkdown = (text) => {
    document.getElementById('preview').innerHTML = marked(text)
  }

  useEffect(() => {
    parseMarkdown(input)
  }, [input])

  return (
    <div className="main-container">
      <textarea
        name=""
        id="editor"
        cols="30"
        rows="10"
        value={input}
        onChange={e => handleChange(e)}
      ></textarea>
      <div id="preview" />
    </div>
  )
}
