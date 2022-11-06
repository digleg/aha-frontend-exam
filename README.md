# aha-frontend-exam

> Please read **Dev Notes** before develop!  
> Happy Hacking!

## Collaborator

- FE: Vito Huang

## Dev Notes

- font family support: Ubuntu@700,500,400,300; Open_Sans@600

## Commit Rules

Git Commit style guide, shall refer to [commitlint](https://commitlint.js.org/#/)

- feat: new / edit feature.

- ci: related to CI/CD.

- fix: bug fix.

- docs: documentation.

- style: formatting change, not affecting the coding logic (ex: white-space, formatting, missing semi colons, etc).

- refactor: Neither new feature, nor bug fix.

- perf: A code change that improves performance.

- test: Adding missing tests.

- chore: Add scripts or or add tools.

- revert: revert to a specific version with some reasons.

# Project Structure

```
width: 1440px height: auto

src
    fonts
    interfaces
    styles
    components

        SideBar.tsx
        // not show width less then 1440px
        // desktop: height 100%; display: flex; width: 80px;
        // mobile: height 66px; display: flex; flex-direction: column-reverse; word hidden

        SearchWrapper.tsx
        // margin 130px

        Logo.tsx
        // size: 35*15

        Input.tsx
        // width: 100%

        Slider.tsx
        // width: 100%

        Button.tsx

        SquaredButton.tsx
        // width: 343px; height 40px;
        // Animation: hover

        Button.tsx
        // variable: normal
        // Following: 76*28
        // Follow: 60*29
        // Animation: hover

        Gallery.tsx
        // infinite scroll
        GalleryItem.tsx
        Skeleton.tsx

        Profile.tsx
        // Tab - width: 375, height: 100%
        // no margin

        Follow.tsx
        // margin-left / margin-right: 16px;

        FollowItem.tsx
        // margin-bottom: 21px;
        // justify-content: space-between
        Button.tsx
        // variable: outlined & contained

        TagsWrapper.tsx
        TagsItem.tsx

        BackButton.tsx

    pages

        Home.tsx
        // includes: SearchWrapper, Tabs
        // SearchWrapper with min-width & center
        // Add Logo when screen width < 1440px
        Tags.tsx
        // includes: TagsWrapper
        // Add Logo when screen width < 1440px

    App.tsx
    // includes: SideBar, Routing
    // Hide Logo when screen width < 1440px

    index.tsx
```
