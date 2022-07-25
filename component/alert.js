import Alert from '@mui/material/Alert';

export default function useAlert (typeAlert) {

  return (
    <>
      {typeAlert ? (
        <Alert severity="success">This is a success alert — check it out!</Alert>
        ) : (
         <Alert severity="error">This is an error alert — check it out!</Alert>
        )
      }
    </>

  )
}
