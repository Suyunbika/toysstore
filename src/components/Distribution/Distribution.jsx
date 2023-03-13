const Distribution = () => {
  return (
    <div className="distribution">
        <h1 className="distribution-title">ПОДПИШИСЬ НА РАССЫЛКУ</h1>
        <p className="distribution-text">Подпишитесь на рассылку, чтобы быть в курсе всех новинок и скидок!</p>
        <form action="" className="distribution-form">
            <input type="text" className="distribution-input" placeholder="Введите e-mail"/>
            <input type="submit" className="distribution-button" value="Подписаться"/>
        </form>
    </div>
  )
}

export default Distribution