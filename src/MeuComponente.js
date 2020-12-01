function MeuComponente({ isEnabled }) {
  return (
    <div>
      Banana
      {
        isEnabled && (
          <div>
            SAVE
            {
              [].map((item) => <div>{item.name}</div>)
            }
          </div>
        )
      }
    </div>
  )
}

export default MeuComponente;