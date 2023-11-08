import React, {FC} from "react";


type ButtonPropsType ={
   nameButton: string
}
export const Button: FC<ButtonPropsType> =(props) => {
   debugger
   return (
      <>
         <button>{props.nameButton}</button>
      </>
   );
};