This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 주제
인스타그램의 infinite scroll 이 어떤 아이디어로 구현되어 있는지 확인한다.

### 요구사항
- 보여지는 리스트에 대해 row 의 갯수는 제한된다. ex) 20개   
- 스크롤의 높이는 유지된다. ex) 보여지는 row 는 비록 20개일지라도, 실제 요청된 row 는 200개라면, 200개에 따른 스크롤 높이 유지.

### 관련 블로그 글
[블로그 글](https://mygumi.tistory.com/376)

### 예제 순서
```sh
$ git checkout 01-scroll
```

* scroll 이벤트를 등록하여 스크롤 상태를 확인한다.

```sh
$ git checkout 02-load-more
```

* 스크롤이 하단에 도달하면 아이템을 추가하는 함수를 호출한다.

```sh
$ git checkout 03-sliced-items
```

* 요청된 아이템 수가 무한대로 많더라도, 보여지는 아이템 수는 20개로 제한한다.
* 이슈 존재 - 강제로 보여지는 아이템 수를 감소시키기 때문에, scrollTop 이 줄어드는 시점이 발생된다.

```sh
$ git checkout 04-scroll-down
```

* 제한된 갯수의 아이템에 따라, scrollTop 을 유지할 수 있게 paddingTop 을 활용한다.

```sh
$ git checkout 05-scroll-up
```

* 스크롤을 올릴 경우, scrollHeight 를 유지할 수 있게 paddingBottom 을 활용한다.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
