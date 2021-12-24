import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Main from './rotues/Main';
import RandomNumber from './rotues/RandomNumber';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={(
            <div>
              <Main />
              <Link to="/R">랜덤 숫자방으로</Link>
            </div>
)}
        />
        <Route
          path="/R"
          element={
            <RandomNumber />
        }
        />
      </Routes>
    </BrowserRouter>
  );
}
