import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, Fragment } from 'react'
import classNames from 'classnames'


export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | undefined

import SizeContext, { SizeType } from '../config/SizeContext';

export interface FcButtonType {
    className?: string,
    // 设置 Button 类型
    type?: ButtonType,
    href?: string
    children?: React.ReactNode
}

type BaseButtonProps = FcButtonType & ButtonHTMLAttributes<HTMLElement>
type BaseLinkProps = FcButtonType & AnchorHTMLAttributes<HTMLElement>

export type ButtonTypes = Partial<BaseButtonProps & BaseLinkProps>

const Button: FC<ButtonTypes> = (props) => {
    return (
        <SizeContext.Consumer>
            {
              size => {
                const {
                    className,
                    type,
                    ...restProps
                } = props

                const classes = classNames(className, {
                    
                })

                if (type === 'link' && props.href) {
                    <a href=""></a>
                }

                return (
                    <button>
                        
                    </button>
                )
              }
            }
        </SizeContext.Consumer>
    )
}

export default Button
