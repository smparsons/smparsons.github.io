import * as React from "react"

const CommentsSection = (): JSX.Element => {
  const wrapperRef = React.useRef() as React.MutableRefObject<HTMLDivElement>

  React.useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://utteranc.es/client.js"
    script.async = true
    script.setAttribute("repo", "smparsons/smparsons.github.io")
    script.setAttribute("theme", "github-dark")
    script.setAttribute("issue-term", "pathname")
    script.setAttribute("crossorigin", "anonymous")
    wrapperRef.current.appendChild(script)

    return () => {
      // Remove unnecessary utterances styles when we're done.
      const styleTagsToRemove = Array.from(document.head.querySelectorAll("style"))
        .filter((styleTag) => styleTag!.textContent!.includes("utterances"))

      styleTagsToRemove.forEach((styleTag) => {
        document.head.removeChild(styleTag)
      })
    }
  }, [])

  return (
    <div className="utterances-wrapper" ref={wrapperRef}>
      <h3>Comments</h3>
    </div>
  )
}

export default CommentsSection
