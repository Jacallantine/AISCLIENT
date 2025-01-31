function Button3({onClick, label})
{

    return <button className="  max-md:w-[font-size:12px] c-button c-button--gooey [opacity:0] " onClick={onClick}> {label}
    <div className="c-button__blobs">
    <div></div>
    <div></div>
    <div></div>
    </div>
  </button>
}

export default Button3