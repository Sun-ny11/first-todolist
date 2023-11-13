import React, { FC } from "react";


type ButtonPropsType = {
   nameButton: string
   onClickHandler?: () => void
}
export const Button: FC<ButtonPropsType> = (props) => {

   return (
      <>
         <button onClick={props.onClickHandler}>{props.nameButton}</button>
      </>
   );
};