# The Agile Monkeys - Coding Challenge

A coding challenge made as part of the selection process for the position of Frontend oriented developer.

**Author**: Maximiliano Spoltore

### About the challenge

The main goal was to convert the provided [Figma design](https://www.figma.com/proto/m3kyeyqdfOZscEKGJhfW27/Frontend_test_1.0?page-id=0%3A1&node-id=3%3A1839&viewport=241%2C48%2C0.16&scaling=min-zoom) into code (HTML+CSS), ideally using [ReactJS](https://reactjs.org/) and [TailwindCSS](https://tailwindcss.com/).

---

### Project Structure

The project is organized as follows:

- **pages:**
	All the view represents a specific page, in this case, the homepage (Home).
	
- **sections:**
	Every relevant part of a page is considered a `section`. All main section components of a `Page` are inside this folder.
- **layouts:**
	The layouts allow sharing certain structure among different views, avoiding repetition of some components in each page. In this case, the `MainLayout` component includes both `Header` and `Footer` .
- **components:**
	All reusable components such as `Button`, `Icon`, `Image`, `Logo`, among others, are located in this folder.
- **theme:**
	All theme values, such as `palette`, are located in this folder.
