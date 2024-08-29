# Project Overview
https://github.com/user-attachments/assets/a1cd7d7e-d8f8-4eec-b396-2e51ea1c23ba

<p>Live Demo</p>
<p>Frontend live sever - https://help-center-frontend-ryos.vercel.app/</p>
<p>Backend live server - https://helpcenter-backend-3.onrender.com/</p>



## Frontend Setup

<p>1. Navigate to the Frontend Directory</p>
<pre><code>cd frontend</code></pre>

<p>2. Install Dependencies</p>
<pre><code>npm install</code></pre>

<p>3. Run the Frontend Development Server</p>
<pre><code>npm run dev</code></pre>

<p>The frontend development server should now be running at <a href="http://localhost:5173">http://localhost:5173</a>.</p>

## Backend Setup

<p>1. Navigate to the Backend Directory</p>
<pre><code>cd backend</code></pre>

<p>2. Install Dependencies</p>
<pre><code>npm install</code></pre>

<p>3. Configure Environment Variables</p>
<p>Create a <code>.env</code> file in the <code>backend</code> directory and add the following variable:</p>
<pre><code>MONGODB_URL="mongodb+srv://manoranjanrkl2009:s9xqfs9dy7RjIY9P@cluster0.isirm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"</code></pre>

<p>4. Run the Backend Server</p>
<pre><code>npx nodemon server.js</code></pre>

<p>The backend server should now be running at <a href="http://localhost:4000">http://localhost:4000</a>.</p>


<h1>1.How can you implement shared functionality across a component tree?</h1>
<p> To implement shared functionality across a component tree in React, you can use several approaches. One common method is to create a context using React's Context API. This allows you to define a shared state or functions at a higher level and make them available to all child components without explicitly passing props through each level. Another approach is to use custom hooks, which encapsulate reusable logic and can be imported into any component that needs that functionality. For more complex state management, you might employ a state management library like Redux or MobX. Lastly, you can use higher-order components (HOCs) or render props pattern to wrap components with shared behavior, although these patterns are less common in modern React development compared to hooks and context.</p>

<h1>2.Why is the useState hook appropriate for handling state in a complex component?</h1>
<p>The useState hook is appropriate for handling state in a complex component for several reasons. It provides a simple and efficient way to add state to functional components, allowing them to manage and update their own data without relying on class-based components. useState enables components to re-render when state changes, ensuring the UI stays in sync with the underlying data. It also supports multiple state variables within a single component, making it easier to organize and manage different pieces of state independently. Additionally, useState integrates well with other hooks like useEffect, allowing for side effects based on state changes. This combination of simplicity, efficiency, and flexibility makes useState a powerful tool for managing state in complex components, improving code readability and maintainability.</p>

