# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a **university student registration analytics dashboard** template from a collection of 100+ big data visualization templates. It's built with vanilla HTML/CSS/JavaScript and uses ECharts for data visualization.

## Quick Commands
- **Start development**: Open `index.html` in browser
- **Local server**: `python -m http.server 8000` or `npx serve`
- **View dashboard**: Navigate to `http://localhost:8000`

## Architecture
- **Frontend**: Pure HTML/CSS/JavaScript (no build tools)
- **Charts**: ECharts 5.x with China map support
- **Layout**: 3-column responsive dashboard
- **Data**: Real-time AJAX endpoints

## Key Files
- `index.html` - Main dashboard page
- `static/js/bigdata.js` - Core application logic and chart configurations
- `static/css/home.css` - Dashboard styles and responsive breakpoints
- `666.md` - Environment configuration (API endpoints)

## Development Setup
1. **No build required**: Static files only
2. **Local server needed** for AJAX functionality
3. **API endpoints** configured in `666.md`
4. **Chart data** loaded via AJAX from `/stusv-estudent-main/stusv/bigdata/nologin/`

## Customization Points
- **Charts**: Modify `bigdata.js` - search for `echarts.init()` calls
- **Styling**: Edit `home.css` - CSS variables at top for theme colors
- **Data sources**: Update endpoints in `666.md`
- **Responsive**: Adjust media queries in `home.css`

## Browser Requirements
- Modern browser with ES6 support
- Internet connection for map tiles
- Local server for AJAX (CORS requirements)

## Template Structure
- Left panel: Gender distribution, top provinces
- Center: China map with student origins
- Right: Real-time stats, age demographics
- Auto-refresh: 10-second intervals