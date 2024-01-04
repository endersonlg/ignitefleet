import { TextInput, TextInputProps } from 'react-native'
import { Container, Input, Label } from './styles'
import { useTheme } from 'styled-components'
import { forwardRef } from 'react'

type Props = TextInputProps & {
  label: string
}

export const TextAreaInput = forwardRef<TextInput, Props>(
  ({ label, ...rest }, ref) => {
    const { COLORS } = useTheme()

    return (
      <Container>
        <Label>{label}</Label>

        <Input
          // @ts-expect-error:ignora
          ref={ref}
          placeholderTextColor={COLORS.GRAY_400}
          multiline
          autoCapitalize="sentences"
          {...rest}
        />
      </Container>
    )
  },
)
