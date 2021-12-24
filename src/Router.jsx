import React from 'react';
import {
  BrowserRouter, Routes, Route,
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
