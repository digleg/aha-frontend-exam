# aha-frontend-exam

## Online Demo Link(Deploy on heroku)
https://aha-frontend-exam.herokuapp.com/

> Please read **Dev Notes** before develop!  
> Happy Hacking!

## Collaborator

- FE: Vito Huang

## Dev Notes

- font family support: Ubuntu@700,500,400,300; Open_Sans@600

## Command

- npm install && npm run start;

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
    components
        Common
            BackButton.tsx
            ContentWrapper.tsx
            // main wrapper for sidebar & router

            Logo.tsx
            // size: 35*15

            SideBar.tsx
            // not show width less then 1440px
            // desktop: height 100%; display: flex; width: 80px;
            // mobile: height 66px; display: flex; flex-direction: column-reverse; word hidden

            SideBarItem.tsx
            // with badge
            // able to hide & highlights words

        Home
            Button.tsx
            // variable: normal, outlined, contained
            // Following: 76*28
            // Follow: 60*29
            // Animation: hover

            Divider.tsx
            FollowItem.tsx
            FollowItemSkeleton.tsx

            FollowItem.tsx
            // margin-bottom: 21px;
            // justify-content: space-between
            // infinite scroll

            FollowItemSkeleton.tsx
            Button.tsx
            // variable: outlined & contained

            Gallery.tsx
            // infinite scroll
            GalleryItem.tsx
            GalleryItemSkeleton.tsx

            Input.tsx
            // width: 100%

            Profile.tsx
            // Tab - width: 375, height: 100%
            // no margin

            SearchWrapper.tsx
            // margin 130px

            Slider.tsx
            // width: 100%

        Tags
            TagsItem.tsx
            TagsItemSkeleton.tsx
            TagsWrapper.tsx
    fonts
    hook
        useAppRedux.ts
        // for the use-related function's typescript needs
    interfaces
        I_home.ts
        I_tags.ts
    pages
        Home.tsx
        // includes: SearchWrapper, Tabs
        // SearchWrapper with min-width & center
        // Add Logo when screen width < 1440px
        Tags.tsx
        // includes: TagsWrapper
        // Add Logo when screen width < 1440px
    redux
        slices
            commonSlice.ts
            // for the general used state
            homeSlice.ts
            // for the state in home page
        store.ts
    styles
    App.tsx
    // includes: SideBar, Routing
    // Hide Logo when screen width < 1440px

    index.tsx
```

# Heroku settings

test 1
