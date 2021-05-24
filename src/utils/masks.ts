import React from "react";

export function phoneMask(e: React.FormEvent<HTMLInputElement>) {
  // +55 (24) 99203-5033
  e.currentTarget.maxLength = 11;
  let value = e.currentTarget.value;

  value = value.replace(/\D/g,'');
  // value = value.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
  value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

  e.currentTarget.value = value;
  return e;
}
