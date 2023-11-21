import React, { FC } from "react";


type ButtonPropsType = {
   nameButton: string
   onClickHandler?: () => void
   disabled?: boolean
}
export const Button: FC<ButtonPropsType> = (props) => {

   return (
      <>
         
         <button disabled={props.disabled} onClick={props.onClickHandler}>{props.nameButton}</button>
      </>
   );
};