# Core React Loop

## Mount

Cuando renderizamos el componente por vez primera, no hay snapshot previo con la que comparar. React creará los nodos necesarios y los inyectará en el DOM.

## Trigger

Cuando el estado cambie, mediante una función "set X". Le estamos diciendo a React que el valor de un estado ha sido actualizado.

## Render

Porque el estado ha cambiado, necesitamos generar una nueva descripción de la UI. React invocará nuestro componente otra vez.

Con este nuevo snapshot, react usará la **reconciliación**, comparando el anterior y el actual snapshot. Y sabrá que hacer con el DOM.

## Commit

Si hay cualquier update en el DOM necesarios, React realizará las mutaciones necesaria: cambiar el texto de un nodo, crear nuevos nodos, borrarlos etc.

Una vez los cambios han sido commiteados, React se pone inactivo y espera al próximo trigger.

# ¿Cuándo se re-renderiza un componente?

- Cuando una prop o estado cambian.
- Las re-renderizaciones afectan al componente que tiene el estado y todos sus descendientes.

# memo

- Usa una técnica llamada **memoization**
- Sólo cambiara si una prop o el estado cambia.
- No se debería usar **memo** de forma prematura. Ya que el coste de usarlo de esa manera, podría ser más costoso que una re-renderización. Ya que tiene que comprobar que props/estado han cambiado.
- Se debería usar para solucionar un problema de performance.

# useMemo hook

- La idea fundamental es que nos permite "recordar" un valor calculado entre renders.
- Toma dos argumentos:
  - El cálculo a realizar dentro de una función callback.
  - Un listado de dependencias.
- Tiene similaridad con el hook useEffect, pero la diferencia es que useMemo se usa para calcular un valor en el render y useEffect invoca la función callback después del render.

# useCallback hook

- Es el syntactic sugar de useMemo y está pensado para usarlo con funciones en vez de arrays/objetos.
