/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'store', 'libs', '__tests__'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  // api_key를 마스킹 하고 싶을 때 아래 rewrites 예제 코드 주석 해제
  // Uncomment the rewrites example code below when you want to mask the api_key

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/movies",
  //       destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  //     },
  //   ];
  // },
}

module.exports = nextConfig
