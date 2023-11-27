import React, { FC } from "react";


type ButtonPropsType = {
   nameButton: string
   onClickHandler?: () => void
   disabled?: boolean
   classes?:string
}
export const Button: FC<ButtonPropsType> = (props) => {

   return (
      <>
         
         <button className={props.classes} disabled={props.disabled} onClick={props.onClickHandler}>{props.nameButton}</button>
      </>
   );
};