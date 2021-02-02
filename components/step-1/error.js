import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/react'

function Error({ message }) {
  return (
    <Alert status="error" borderRadius="md" textAlign="left">
      <AlertIcon />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}

export default Error
