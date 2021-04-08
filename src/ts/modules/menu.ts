(() => {
    const submenus: NodeListOf<HTMLElement> = document.querySelectorAll('.has-submenu')
    if (submenus.length < 1) { return }

    document.body.addEventListener('click', (e) => {
        const target = <HTMLElement>e.target
        const clickOutSideMenu = target.closest('.submenu') === null

        if (target.classList.contains('menu-link')) {
            e.preventDefault()
            const submenuParent = <HTMLElement>target.closest('.has-submenu')
            if (!submenuParent) { return }

            submenus.forEach(menu => {
                if (submenuParent === menu) { return }
                menu.classList.remove('active-menu')
            })

            if (submenuParent.classList.contains('active-menu')) {
                submenuParent.classList.remove('active-menu')
            } else {
                submenuParent.classList.toggle('active-menu')
            }
        } else if (clickOutSideMenu) {
            submenus.forEach(menu => menu.classList.remove('active-menu'));
        }
    })
})();
