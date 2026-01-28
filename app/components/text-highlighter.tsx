interface ITextHighlighter {
  text: string;
  className: string;
}

export default function TextHighlighter({ text, className }: ITextHighlighter) {
  const highlightedText = {
    padding: "0 0.2em",
    borderRadius: "0.3em",
    margin: "0 0.2em",
  };

  return (
    <span className={className} style={highlightedText}>
      {text}
    </span>
  );
}
