import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function Index() {
  useEffect(() => {
    navigate('/forms/inputs');
  }),
    [];
  return <div />;
}
