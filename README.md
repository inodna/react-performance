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

- Las re-renderizaciones afectan al componente que tiene el estado y todos sus descendientes.
