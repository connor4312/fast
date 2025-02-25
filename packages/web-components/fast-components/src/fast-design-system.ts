import { DesignSystem } from "@microsoft/fast-foundation";

/**
 * Provides a design system for the specified element either by returning one that was
 * already created for that element or creating one.
 * @param element - The element to root the design system at. By default, this is the body.
 * @returns A FAST Design System
 * @public
 */
export function provideFASTDesignSystem(element?: HTMLElement): DesignSystem {
    return DesignSystem.getOrCreate(element).withPrefix("fast");
}
