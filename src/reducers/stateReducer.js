let initialState = {
    data: {
        item: 'Press The Button'
    },
    aa:0
}
export default function(state=initialState, action){
    console.log(action)
  switch (action.type) {
    case "NAMA": 
        state.data = {item:'Name: Figar Januari Ramadhan'}
      break;
    case "ALAMAT":
        state.data = {item: 'Address: Bogor West Java'}
      break;
  }
  return {...state};
}