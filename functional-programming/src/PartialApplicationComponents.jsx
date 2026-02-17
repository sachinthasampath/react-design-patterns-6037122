export const Button = ({ size, color, text, ...props }) => {
  return (
    <button style={{
      padding: size === 'large' ? '32px' : '8px',
      fontSize: size === 'large' ? '24px' : '16px',
      backgroundColor: color,
    }}>{text}</button>
  )
}
export const DangerButton = ({ text, ...props }) => {
  return (
    <Button color="red" size="large" text={text} {...props} />
  )
}

export const PartiallyApply = (Component, partialProps) => {
  return props => {
    return <Component {...partialProps} {...props} />
  }
}

export const DangerButton2 = PartiallyApply(Button, { color: 'red', size: 'large' });
export const LargeButton = PartiallyApply(Button, { size: 'large' });
export const SuccessButton = PartiallyApply(Button, { color: 'green', size: 'large' });