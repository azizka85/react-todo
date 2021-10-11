/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from "react";

export interface TodoItemProps {
  title: string,
  active: boolean
}

export function TodoItem(props: TodoItemProps) {
  return (
    <li>
      {props.title} ({props.active ? 'active' : 'not active'})
    </li>
  );
}
